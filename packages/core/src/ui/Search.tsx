import { FlatList, KeyboardType, Text, TextStyle, View, ViewStyle } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';

import { Internal } from '../utils/helpers';
import Searchbar from './Searchbar';
import { actions } from '../store';
import { useAppDispatch } from '../hooks';

export interface SearchProps {
  data: any;
  searchbarStyle?: ViewStyle & TextStyle;
  objectPropertyToUseForDisplayingData?: string;
  placeholder?: string;
  keyboardType?: KeyboardType;
}

const Search: React.FC<SearchProps> = ({ data, ...rest }) => {
  const { searchbarStyle, objectPropertyToUseForDisplayingData, placeholder, keyboardType } = rest;

  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredCollection, setFilteredCollection] = useState(Internal.normalizeSearchData(data, objectPropertyToUseForDisplayingData));
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(
    (text: string) => {
      const filteredData = data.filter((dataItem: string) => dataItem.includes(text));

      setSearchInputValue(text);
      void dispatch(actions.search.saveUserInput(text));
      setFilteredCollection(filteredData);
    },
    [data, dispatch]
  );

  const renderHeader = useMemo(() => {
    return (
      <Searchbar
        value={searchInputValue}
        onChangeText={handleInputChange}
        style={searchbarStyle}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    );
  }, [handleInputChange, keyboardType, placeholder, searchInputValue, searchbarStyle]);

  return (
    <View>
      <FlatList
        data={filteredCollection}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
        keyExtractor={(item, index) => item.objectPropertyToUseForDisplayingData ?? index.toString()}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default Search;
