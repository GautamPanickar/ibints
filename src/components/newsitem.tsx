import * as React from 'react';

interface Props {
  caption?: string;
  content?: Array<string>;
  image?:string;
}

class NewsItem extends React.Component<Props, null> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
        <div className='item'>
            <div className="container" id='newsItem'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="thumbnail">                  
                            <img src={this.props.image}>
                            </img>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="caption">                        
                            <h3>{this.props.caption}</h3>
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
      let content = this.props.content;
      let paragraphs: Array<JSX.Element> = new Array<JSX.Element>();
      if (content.length > 0) {
          for (let paragraph of content) {
              paragraphs.push(<p>{paragraph}</p>);
          }
      }
      return paragraphs;
  }
}

export = NewsItem;