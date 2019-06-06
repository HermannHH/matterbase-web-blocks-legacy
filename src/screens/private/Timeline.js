import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query, graphql, compose } from 'react-apollo';
import { useQuery } from "react-apollo-hooks";
import _ from 'lodash';

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";
import { statement } from '@babel/template';


const ListMatters = gql`
query listMatters {
  matters {
    title
    token
  }
}
`;


const createMatter = gql`
  mutation createMatter($title: String!) {
    createMatter(input: {
      title: $title
    }) {
      matter {
        title
        token
      }
      errors
    }
  }
`;


const deleteMatter = gql`
  mutation deleteMatter($token: String!) {
    deleteMatter(input: {
      token: $token
    }) {
      matter {
        title
        token
      }
      errors
    }
  }
`;


function Timeline({ createMatter, deleteMatter }) {

  const arrayReduce = (array, keyName ) => {
    if (!array) { return {
      keyed: {},
      indexed: []
    } }
    const keyed = array.reduce((obj, item) => {
      obj[item[keyName]] = item
      return obj
    }, {});

    const indexed = array.map( item => item[keyName]);

    return {
      keyed,
      indexed
    };
  };
   

  const { data: queryData, loading: queryLoading } = useQuery(ListMatters, {
    suspend: false
  });
  const [data, setData] = useState({
    matters: {},
    mattersIndex: []
  });
  const [listLoading, setListLoading] = useState(true);
  useEffect(() => {
    const arrayReduced = arrayReduce(queryData.matters, 'token');
    
    setData({
      ...data,
      matters: arrayReduced.keyed,
      mattersIndex: arrayReduced.indexed
    });
    setListLoading(queryLoading);
  }, [queryLoading]);


  function appendToState(params) {
    const newMattersIndex = data.mattersIndex.concat(params.token);
    const newMatters = {
      ...data.matters,
      [params.token] : {
        ...params,
      }
    };
    setData({...data, matters: newMatters, mattersIndex: newMattersIndex })
  }


  function removeFromState(params) {
    const newMattersIndex = data.mattersIndex.filter( item => item !== params.token);
    // const toRemove = params.token;
    const newMatters = _.omit(data.matters, params.token);
    // console.log('tttt', params, newMattersIndex, newMatters)
    setData({...data, matters: newMatters, mattersIndex: newMattersIndex })
  }

  
  // console.log('props', props)
  async function addMatter({ title }) {
    try {
      const { data } = await createMatter({ title });
      appendToState(data.createMatter.matter)
    } catch (error) {
      console.log('error', error)
    }
  }
  async function removeMatter({ token }) {
    try {
      const { data } = await deleteMatter({ token });
      removeFromState(data.deleteMatter.matter)
    } catch (error) {
      console.log('error', error)
    }
  }

  // const [state, setState] = useState({ matters: {}, mattersIndex: [] });
  // if( tt && tt.length) {
    
  //   tt.map( matter => {
  //     matters[matter.token] = {...matter};
  //     mattersIndex = mattersIndex.concat(matter.token)
  //     return
  //   });
  //   // setState({ ...state, matters, mattersIndex });
  // }

  console.log('arrayReduced', data)

  return (
    <div className="container">
      {listLoading ?
        <h1>Loading...</h1>
        :
        <div className="my-5">
          <button onClick={() => addMatter({ title: "Hello World zz"})}>Create</button>
          <MatterList matters={data.matters} mattersIndex={data.mattersIndex} removeMatter={removeMatter}/>
        </div>
    }
      
    </div>
  );
}

Timeline.propTypes = {};

export default compose(
  graphql(createMatter, {
    props: ({ ownProps, mutate }) => ({
      createMatter: ({ title }) =>
        mutate({
          variables: { title },
        }),
    }),
  }),
  graphql(deleteMatter, {
    props: ({ ownProps, mutate }) => ({
      deleteMatter: ({ token }) =>
        mutate({
          variables: { token },
        }),
    }),
  }),
) (standard(Timeline));
