import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { ROUTER_DIRECTIVES } from "angular2/router";
import { Codeblock } from "ng2-prism/codeblock";
import { Markup } from "ng2-prism/languages";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, ROUTER_DIRECTIVES, Codeblock, Markup],
    selector: "menu-cp",
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Menu</h1>
        <p>Semantic UI Menu component <i class="icon external"></i>
        <a href="http://semantic-ui.com/collections/menu.html" target="_blank">Semantic UI Menu</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo inverted ( with sidebar )</h4>
    <sm-menu title="Angular2" class="ui menu inverted teal" logo="/assets/images/semantic.png">
        <a sm-item href="#/elements/menu" *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>

        <sm-menu class="ui menu right secondary icon">
            <a sm-item href="#/elements/menu" icon="sidebar big" class="item" sm-dir-sidebar="right"></a>
            <sm-sidebar class="right vertical inverted sidebar labeled menu teal huge">
                <a class="item">
                    <i class="home icon"></i>
                    Home
                </a>
                <a class="item">
                    <i class="block layout icon"></i>
                    Topics
                </a>
                <a class="item">
                    <i class="smile icon"></i>
                    Friends
                </a>
            </sm-sidebar>
        </sm-menu>
    </sm-menu>

    <h4 class="ui header">Code</h4>
    <codeblock markup>
&lt;sm-menu title="Angular2" class="ui menu inverted teal" logo="/assets/images/semantic.png">
    &lt;a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}&lt;/a>

    &lt;sm-menu class="ui menu right secondary">
        &lt;a sm-item icon="sidebar big" class="item">&lt;/a>
    &lt;/sm-menu>
&lt;/sm-menu>
</codeblock>
    <h4 class="ui header">Demo three item</h4>
    <sm-menu title="" class="ui three item menu">
        <a sm-item *ngFor="#item of ['Editorials', 'Reviews', 'Upcoming Events']" class="item">{{item}}</a>
    </sm-menu>

    <h4 class="ui header">Demo pointing</h4>
    <sm-menu title="" class="ui three item menu pointing">
        <a sm-item *ngFor="#item of ['Editorials', 'Reviews', 'Upcoming Events']; #i = index"
        class="item" [ngClass]="{'active': i == 1}" >{{item}}</a>
    </sm-menu>

    <h4 class="ui header">Labeled fluid icon menu</h4>
    <sm-menu title="Labeled Icon" class="ui fluid three item labeled icon menu inverted blue">
        <a sm-item *ngFor="#item of labeledIcons" [icon]="item.icon" class="item">{{item?.title}}</a>
    </sm-menu>    
    
    <h4 class="ui header">Demo vertical</h4>
    <sm-menu title="Vertical" class="ui menu vertical">
        <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
    </sm-menu>

    <h4 class="ui header">Code</h4>
<codeblock markup>
&lt;sm-menu title="Vertical" class="ui menu vertical">
    &lt;a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}&lt;/a>
&lt;/sm-menu>
</codeblock>
      <h4 class="ui header">Demo secondary</h4>
    <sm-menu title="Secondary" class="ui menu secondary">
        <a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}</a>
    </sm-menu>

    <h4 class="ui header">Code</h4>
<codeblock markup>
&lt;sm-menu title="Secondary" class="ui menu secondary">
    &lt;a sm-item *ngFor="#item of items" [icon]="item.icon" class="item">{{item?.title}}&lt;/a>
&lt;/sm-menu>
</codeblock>
</div>
`
})

export class MenuComponent {
    items: Array<any> = [];
    labeledIcons: Array<any> = [];

    constructor() {
        this.items = [{
            "title": "Home",
            "link": "Home",
            "icon": "home"
        }, {
                "title": "About Us",
                "link": "#/"
            }, {
                "title": "Contact",
                "link": "#/"
            }];

        this.labeledIcons = [{
            "title": "Games",
            "link": "Home",
            "icon": "gamepad"
        }, {
                "title": "Chanel",
                "link": "Chanel",
                "icon": "video camera"
            }, {
                "title": "Videos",
                "link": "Videos",
                "icon": "video play"
            }];

    }
}
