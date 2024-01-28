export const pagination = (page, row) => {
    let skipDocuments = (page - 1) * row;
    let getDocuments = row;
  
    return { skipDocuments, getDocuments };
  };
  