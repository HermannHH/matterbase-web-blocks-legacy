import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query, graphql, compose } from 'react-apollo';
import { useQuery } from "react-apollo-hooks";

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


function Timeline({ createMatter }) {

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



  // const tt = useQuery(ListMatters, {
  //   suspend: false
  // });

  // const [listLoading, setListLoading] = useState(true);
  // useEffect(() => {
  //   console.log('changes')
  //   setListLoading(loading)
  // }, [loading]);

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

  
  // console.log('props', props)
  async function test({ title }) {
    try {
      const { data } = await createMatter({ title });
      // const cc = await refetch();
      console.log('resp', data.createMatter.matter);
      appendToState(data.createMatter.matter)
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
          <button onClick={() => test({ title: "Hello World zz"})}>Create</button>
          <MatterList matters={data.matters} mattersIndex={data.mattersIndex}/>
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
) (standard(Timeline));
