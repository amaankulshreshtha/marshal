import { useCallback, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Internal } from '../utils/helpers';

export default function useSearch(data: any, objectPropertyToUseForDisplayingData?: any) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredCollectionAfterSearch, setFilteredCollectionAfterSearch] = useState(
    Internal.normalizeSearchData(data, objectPropertyToUseForDisplayingData)
  );

  const handleInputChange = useCallback(
    (inputEvent: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const { text } = inputEvent.nativeEvent;
      const dataToBeDisplayedAfterUserInput = filteredCollectionAfterSearch.map((dataItem: string) => dataItem.includes(text.toString()));

      setSearchInputValue(text.toString());
      setFilteredCollectionAfterSearch(dataToBeDisplayedAfterUserInput);
    },
    [filteredCollectionAfterSearch]
  );

  return { searchInputValue, filteredCollectionAfterSearch, handleInputChange };
}
