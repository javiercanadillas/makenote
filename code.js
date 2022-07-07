/**
 * Creates a new note from a template, invoked from the client side
 * @param  {string} customer
 * @param  {string} title
 * @param  {string} date
 */
function createDoc(customer, title, date) {
    // Put your note template document ID here:
    const docTemplateID = '';
    // Put the Drive folder ID where your new notes will be created here:
    const destFolderID = '';
    // Notes MUST be created here, after creation they may be linked in other folders
    // with a Drive shortcut.
    const destFolder = DriveApp.getFolderById(destFolderID);
  
    // Placeholders and separators to be used inside the document, customize in the template:
    const documentTitlePH = '<title>';
    const leftSideFooterPH = '<footer>';
    const datePH = '<date>';
    const titleSeparator = ' - ';
    const footerSeparator = ': ';

    let documentFileName = '';
    let documentTitle = '';
    let leftSideFooter = '';
    // Some personal renaming logic, redo to fit your use case
    // Set the Document File Name, Title and Footer depending on if this
    // is a customer note, or an internal one (just called NOTE)
    if (typeof customer === 'string' && customer.length === 0) {
      documentFileName = 'NOTE' + titleSeparator + title;
      documentTitle = title;
      leftSideFooter = title;
    } else {
      documentFileName = customer + titleSeparator + title;
      documentTitle = documentFileName;
      leftSideFooter = customer + footerSeparator + title;
    }
  
    // Copy document template and get new Document
    newNoteDriveFile = DriveApp.getFileById(docTemplateID).makeCopy(documentFileName, destFolder);
    newNoteDriveFile.setName(documentFileName);
    newNote = DocumentApp.openById(newNoteDriveFile.getId());
  
    // Modify the content of the doc & the footer
    newNote.getBody().replaceText(documentTitlePH, documentTitle);
    newNote.getBody().replaceText(datePH, date);
    newNote.getFooter().replaceText(leftSideFooterPH, leftSideFooter);
    newNote.getFooter().replaceText(datePH, date);
  
    // Return the URL
    return newNote.getUrl()
  }
  
  /**
   * Tests the createDoc function
   */
  function testCreateDoc() {
    //const customer = 'TEST';
    const customer = '';
    const title = 'Sample Title';
    const date = '05/07/2022';
    Logger.log(createDoc(customer, title, date));
  }
  
  /**
   * @param  {} request
   */
  function doGet(request) {
    return HtmlService.createTemplateFromFile('newnote')
        .evaluate();
  }
  
  /**
   * @param  {string} filename
   */
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }