import * as React from 'react';
import NewsItem = require('../components/newsitem');
import newsType = require('../utilities/newsType');
import {LoadingIndicator} from '../components/loadingindicator';
import newsStore =  require('../stores/newsstore');
import newsActionCreator = require('../actioncreators/newsactioncreator');
import enums = require('../utilities/enums');
import HTMLUtilities = require('../utilities/htmlutilities');

interface Props {
  resourceFileData?: any;
  newsResourceFileData?: any;
  onAboutClick?:Function;
}

interface State {
  activeNewsIndex: number;
  isLoading?: boolean;
}

class NewsContainer extends React.Component<Props, State> {

  // Number of news
  private newsCount: number;

  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      activeNewsIndex: 0,
      isLoading: false
    };
    this.newsCount = 0;
  }

  public render() {
    let toRender = this.state.isLoading ? <LoadingIndicator /> : this.newsItems ;
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
                            <div className="carousel-inner">
                                {toRender}
                            </div>  
                            <a className="left carousel-control" data-slide="prev" onClick={this.onPreviousNewsClick}>
                                <span className="icon-prev"></span>
                            </a>
                            <a className="right carousel-control" data-slide-to="next" onClick={this.onNextNewsClick}>
                                <span className="icon-next"></span>
                            </a>
                        </div>                         
                        <div className='center-alignment'>
                            <button className="btn btn-default-dark btn-xl page-scroll" onClick={this.onAboutClick}>
                                {this.props.resourceFileData.homePage.aboutUs}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  public componentDidMount() {
      newsStore.instance.addListener(newsStore.NewsStore.NEWS_CHANGED, this.onNewsChange);
  }

  public componentWillUnmount() {
      newsStore.instance.removeListener(newsStore.NewsStore.NEWS_CHANGED, this.onNewsChange);
  }

  // Returns the news items
  private get newsItems(): Array<JSX.Element> {
    let newsItems:Array<JSX.Element> = new Array<JSX.Element>();
    let dataList = this.props.newsResourceFileData;
    let news = Object.keys(dataList).map(function(i) { return dataList[i] });

    // setting thte total number of news.
    this.newsCount = news.length;
    if (news.length > 0 ) {
      let index =0;
      for (let item of news) {

        let newsToAdd:newsType = {};
        let contentObj = item.content;
        let contentArray = Object.keys(contentObj).map(function(i) { return contentObj[i] });
        let paragraphs: Array<string> = new Array<string>();
        if (contentArray.length > 0 ){
          for(let content of contentArray) {
              paragraphs.push(content);
          }
        }
        // storing details to the type.
        // also  setting the first item to be active by default
        newsToAdd ={
          caption: item.caption,
          content: paragraphs,
          image: item.image,
          isActive: this.isNewsActive(index)
        };
        newsItems.push(<NewsItem  key={HTMLUtilities.UID} news={newsToAdd} />)
        index++;
      }
    }
    return newsItems;
  }

  // Checks if the mentioned news is active or not.
  private isNewsActive(newsIndex: number): boolean {
      if (newsIndex === this.state.activeNewsIndex) {
        return true;
      } else {
        return false;
      }
  }

  // on clicking the next news button
  private onNextNewsClick = () => {
      let currentIndex = this.state.activeNewsIndex;
      if (currentIndex >= 0 && currentIndex < (this.newsCount - 1)) {
          newsActionCreator.changeNews(currentIndex, currentIndex + 1, enums.News.Next);
          this.setState({
              isLoading: true
          });
      }      
  }

  // on clicking the previous news button
  private onPreviousNewsClick = () => {
    let currentIndex = this.state.activeNewsIndex;
      if (currentIndex > 0 && currentIndex <= (this.newsCount - 1)) {
          newsActionCreator.changeNews(currentIndex, currentIndex - 1, enums.News.Previous);
          this.setState({
              isLoading: true
          });
      }
  }

  // on changing news
  private onNewsChange = () => {
    let that = this;
    setTimeout(function(){
        that.setState({
          activeNewsIndex: newsStore.instance.indexToBeActivated,
          isLoading: false
        });
    }, 500);
  }

  // On clicking about us button.
  private onAboutClick =():void =>{
    this.props.onAboutClick();
  }
}

export = NewsContainer;