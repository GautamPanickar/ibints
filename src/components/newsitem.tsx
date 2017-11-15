import * as React from 'react';
import newsType = require('../utilities/newsType');
import HTMLUtilities = require('../utilities/htmlutilities');


interface Props {
  news: newsType;
}

class NewsItem extends React.Component<Props, null> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
        <div className={this.props.news.isActive? 'item active' : 'item'}>
            <div className="container" id='newsItem'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="thumbnail">                  
                            <img src={this.props.news.image}>
                            </img>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="caption">                        
                            <h3>{this.props.news.caption}</h3>
                            {this.paragraphs}                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  // returns the paragraphs to dislay
  private get paragraphs() : Array<JSX.Element> {
      let content = this.props.news.content;
      let paragraphs: Array<JSX.Element> = new Array<JSX.Element>();
      if (content.length > 0) {
          for (let paragraph of content) {
              paragraphs.push(<p key={HTMLUtilities.UID}>{paragraph}</p>);
          }
      }
      return paragraphs;
  }
}

export = NewsItem;