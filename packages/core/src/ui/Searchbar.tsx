import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface SearchbarProps extends TextInputProps {}

const Searchbar: React.FC<SearchbarProps> = ({ ...rest }) => {
  const { value, onChangeText, style: searchbarStyle, placeholder, keyboardType } = rest;
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.searchbar, searchbarStyle]}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  searchbar: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    padding: 12
  }
});

export default Searchbar;
