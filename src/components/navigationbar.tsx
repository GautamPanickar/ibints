import React = require("react");
import resourceFileActionCreator = require('../actioncreators/resourcefileactioncreator');
import ResourceFileStore = require('../stores/resourcefilestore');
import { Header } from  '../../src/components/header';
import { Footer } from  '../../src/components/footer';
import ContactForm = require( '../../src/components/contactform');
import Solutions =  require('../../src/components/solutionscontainer');
import ClientRegistrations =  require('../../src/components/clientregistrations');

interface Props { 
	name?:string;
}

interface State {
    displayNavbar?:boolean;
    selectedLink?: string;
    isCollapsed?: boolean;
}

export class  NavigationBar extends React.Component<Props, State> {

    private resourceFileData:any = null;
    private newsResourceFileData:any = null;
    private registrationsResourceFileData:any = null;

    /* The constructor is called even before the component is mounted */
    constructor(props: Props){
        super(props);
        this.state = {
            displayNavbar: false,
            selectedLink: null,
            isCollapsed: true
        }    


        // bindings
        this.onResourceFileLoaded = this.onResourceFileLoaded.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    // The render method
    public render() {
        let header = this.resourceFileData && this.newsResourceFileData && 
                    (this.state.selectedLink === null || this.state.selectedLink === 'Home' ||
                        this.state.selectedLink === 'About' || this.state.selectedLink === 'News') ? 
                    <Header 
                        resourceFileData={this.resourceFileData}
                        newsResourceFileData={this.newsResourceFileData}
                        scrollToView={this.state.selectedLink}
                    /> : null;
        let contactPage = this.resourceFileData && this.state.selectedLink === 'Contact us' ? 
                    <ContactForm 
                        resourceFileData={this.resourceFileData}
                    /> : null;
        let solutionsPage = this.resourceFileData && this.state.selectedLink === 'Solutions' ? 
                    <Solutions 
                        resourceFileData={this.resourceFileData}
                    /> : null;
        let clientRegistrationsPage = this.resourceFileData && this.registrationsResourceFileData 
                                        && this.state.selectedLink === 'Client registrations' ?
                                        <ClientRegistrations
                                            resourceFileData={this.resourceFileData}
                                            registrationsResourceFileData={this.registrationsResourceFileData}
                                        /> : null;
        return (
            <div>
                {this.renderNavbar()}
                {header}
                {contactPage}
                {solutionsPage}
                {clientRegistrationsPage}
                <Footer name="footer"/>
            </div>
        );
    }

    // Renders the navbar
    private renderNavbar(): JSX.Element {
        if (this.state.displayNavbar) {
            let buttonClass = this.state.isCollapsed ? 'navbar-toggle collapsed': 'navbar-toggle';
            let listClass =  this.state.isCollapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse in';
            return (
                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">                
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className={buttonClass} data-toggle="collapse" 
                                data-target="#bs-example-navbar-collapse-1" aria-expanded={!this.state.isCollapsed}
                                onClick={this.onCollapsedNavbarSelection}>
                                <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand page-scroll">{this.resourceFileData.companyName}</a>
                        </div>
                        <div className={listClass} id="bs-example-navbar-collapse-1"
                            aria-expanded={!this.state.isCollapsed}>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a className="page-scroll" onClick={this.handleOnClick}>{this.resourceFileData.navbar.homeTag}</a>
                                </li>
                                <li>
                                    <a className="page-scroll" onClick={this.handleOnClick}>{this.resourceFileData.navbar.newsTag}</a>
                                </li>
                                <li>
                                    <a className="page-scroll" onClick={this.handleOnClick}>{this.resourceFileData.navbar.aboutTag}</a>
                                </li>
                                <li>
                                    <a className="page-scroll" onClick={this.handleOnClick}>{this.resourceFileData.navbar.solutionsTag}</a>
                                </li>
                                <li>
                                    <a className="page-scroll" onClick={this.handleOnClick}>{this.resourceFileData.navbar.clientRegistrations}
                                    </a>
                                </li>
                                <li>
                                    <a className="page-scroll" onClick={this.handleOnClick}>{this.resourceFileData.navbar.contactTag}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        } else {
            return null;
        }
    }    

    // Component mounted
    public componentDidMount() {
        ResourceFileStore.addListener('ResourceFileLoaded', this.onResourceFileLoaded);

        /* For loading the resource file */
        resourceFileActionCreator.loadResourceFile();
    }

    // Component about to be unmounted
    public componentWillUnmount() {
        ResourceFileStore.removeListener('ResourceFileLoaded', this.onResourceFileLoaded);
    }


    //on loading the resource file
    private onResourceFileLoaded() {
        this.resourceFileData = ResourceFileStore.resourceFile["iBints"];
        this.newsResourceFileData = ResourceFileStore.newsResourceFile["newsSection"];
        this.registrationsResourceFileData = ResourceFileStore.registrationsResourceFile["registrations"];
        this.setState({
            displayNavbar: true
        });
    }

    // On clicking any of the a tags
    private handleOnClick = (event: any) =>{
        let targetElement:Element = event.target;
        let selectedLink: string = targetElement.textContent;
        this.setState({
            selectedLink: selectedLink
        });
    }

    // on clicking the collapsed navbar button
    private onCollapsedNavbarSelection =():void =>{
        this.setState({
            isCollapsed: false
        });
    }
}