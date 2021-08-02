import { useCallback, useState } from 'react';
import { Internal } from '../utils/helpers';

export default function useSearch(data: any, objectPropertyToUseForDisplayingData?: any) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredCollectionAfterSearch, setFilteredCollectionAfterSearch] = useState(
    Internal.normalizeSearchData(data, objectPropertyToUseForDisplayingData)
  );

  const handleInputChange = useCallback(
    (text: string) => {
      const dataToBeDisplayedAfterUserInput = data.filter((dataItem: string) => dataItem.includes(text));

      setSearchInputValue(text);
      // setFilteredCollectionAfterSearch(dataToBeDisplayedAfterUserInput);
    },
    [data]
  );

  return { searchInputValue, filteredCollectionAfterSearch, handleInputChange };
}
