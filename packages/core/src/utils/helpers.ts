export namespace Internal {
  export const normalizeSearchData = (data: any[], objPropToUseForDisplayingData?: any) => {
    let dataCollection = data;
    const isDataElementAnObject = !Array.isArray(dataCollection[0]) && typeof dataCollection[0] === 'object';
    if (isDataElementAnObject) {
      dataCollection = data.map(dataItem => dataItem[objPropToUseForDisplayingData]);
    }
    return dataCollection;
  }
}