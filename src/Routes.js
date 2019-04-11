import React from "react";
import { Route, Switch,Router  } from "react-router";

import index from "./components/index";
import contact from "./components/contact";
import about from "./components/about";
import blogsingle from "./components/blog-single"
import category from "./components/category";








class Routes extends React.Component {
    render() {
        return (
            <Switch>

                <Route exact path="/" component={index} />
                <Route exact path="/contact" component={contact} />
                <Route exact path="/about" component={about} />
                <Route exact path="/Blog-Single" component={blogsingle} />
                <Route  path="/category" component={category} />




                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />	      </Switch>


        );
    }
}

export default Routes;
