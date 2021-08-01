import React from 'react';
import { FlatList, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { useSearch } from '../hooks';

interface SearchProps extends TextInputProps {
  data: any;
  searchbarStyle: ViewStyle & TextStyle;
  objectPropertyToUseForDisplayingData?: string;
}

const Search: React.FC<SearchProps> = ({ data, searchbarStyle, objectPropertyToUseForDisplayingData, ...rest }) => {
  const { searchInputValue, filteredCollectionAfterSearch, handleInputChange } = useSearch(data, objectPropertyToUseForDisplayingData);

  const renderHeader = () => {
    return (
      <TextInput
        value={searchInputValue}
        onChange={handleInputChange}
        style={searchbarStyle}
        placeholder={rest.placeholder}
        keyboardType={rest.keyboardType}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={filteredCollectionAfterSearch}
        renderItem={({ item }) => {
          return <View>{item}</View>;
        }}
        keyExtractor={item => item.objectPropertyToUseForDisplayingData}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default Search;
