// import { ui } from '@marshal/core';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

// const { App: CoreApp } = ui;

const App = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then(async response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    // .finally(() => setLoading(false));
  }, []);

  if (!data) return null;

  return (
    <SafeAreaView>
      <FlatList
        data={data.articles}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
