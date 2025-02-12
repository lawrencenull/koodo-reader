class HtmlParser {
  bookDoc: any;
  contentList: HTMLElement[];
  contentTitleList: any[];
  constructor(bookDoc: any) {
    this.bookDoc = bookDoc;
    this.contentList = [];
    this.contentTitleList = [];
    this.getContent(bookDoc);
  }
  getContent(bookDoc: HTMLElement) {
    this.contentList = Array.from(bookDoc.querySelectorAll("h1,h2,h3,h4,h5,b"));
    for (let i = 0; i < this.contentList.length; i++) {
      let random = Math.floor(Math.random() * 900000) + 100000;
      this.contentTitleList.push({
        label: this.contentList[i].innerText,
        id: "title" + random,
        href: "#title" + random,
        subitems: [],
      });
    }
    for (let i = 0; i < this.contentList.length; i++) {
      this.contentList[i].id = this.contentTitleList[i].id;
    }
  }
  getAnchoredDoc() {
    return this.bookDoc;
  }
  getContentList() {
    return this.contentTitleList;
  }
}

export default HtmlParser;
