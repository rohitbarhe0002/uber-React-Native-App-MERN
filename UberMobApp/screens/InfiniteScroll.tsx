import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const InfiniteScrollExample = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_limit=10`
      );
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const handleLoadMore = async () => {
    setIsLoading(true);
    const nextPageData = await fetchData(page + 1);
    console.log(nextPageData,"=====page data")
    setData([...data, ...nextPageData]);
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(page).then((jsonData) => {
      setData(jsonData);
      setIsLoading(false);
    });
  }, []);

  const renderFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="gray" /> : null;
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 16 }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
};

export default InfiniteScrollExample;
