import * as React from 'react';
import NewsItem = require('../components/newsitem');

interface Props {
  resourceFileData?: any;
}

interface State {
  
}

class NewsContainer extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
  }

  public render() {
    return (
        <section id="news" ref={'news'}>
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-12">
                        <h2 className="section-heading text-black-dark text-center">
                            {this.props.resourceFileData.homePage.news.newsHeader}
                        </h2>
                        <hr className="primary"></hr>
                        <br></br>
                        <div id='newsCaraousel' className='carousel slide'>
                            <a className="left carousel-control" data-slide="prev">
                                <span className="icon-prev"></span>
                            </a>
                            <a className="right carousel-control" data-slide="next">
                                <span className="icon-next"></span>
                            </a>
                            <div className="carousel-inner">
                                {this.newsItems}
                            </div> 
                        </div>                         
                        <div className='center-alignment'>
                            <button className="btn btn-default-dark btn-xl page-scroll">
                                {this.props.resourceFileData.homePage.aboutUs}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }

  // Returns the news items
  private get newsItems(): Array<JSX.Element> {
    let newsItems:Array<JSX.Element> = new Array<JSX.Element>();
    let dataList = this.props.resourceFileData.newsSection;
    let news = Object.keys(dataList).map(function(i) { return dataList[i] });
    if (news.length > 0 ) {
      for (let item of news) {
        let contentObj = item.content;
        let contentArray = Object.keys(contentObj).map(function(i) { return contentObj[i] });
        let paragraphs: Array<string> = new Array<string>();
        if (contentArray.length > 0 ){
          for(let content of contentArray) {
              paragraphs.push(content);
          }
        }
        newsItems.push(<NewsItem
                          caption={item.caption}
                          content={paragraphs}
                          image={item.image}
                        />)
      }
    }    
    return newsItems;
  }
}

export = NewsContainer;