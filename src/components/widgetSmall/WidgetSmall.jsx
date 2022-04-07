import './widgetSmall.css';

// Deze component gemaakt voor een voor mezelf completer design aan de Homepage.
export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <h3 className="widgetSmallTitle"> News </h3>
                <div className="widgetSmallUpdates">
                    
                    <div className="widgetSmallUpdateBlog">
                        <h1 className="widgetSmallUpdateBlogTitle"> Latest News </h1>
                        <p className="widgetSmallUpdateBlogText"> 
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Nam eget dui....
                        </p>
                    </div>

                    <div className="widgetSmallUpdateBlog">
                        <h1 className="widgetSmallUpdateBlogTitle"> Latest News </h1>
                        <p className="widgetSmallUpdateBlogText"> 
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Nam eget dui....
                        </p>
                    </div>

                    <div className="widgetSmallUpdateBlog">
                        <h1 className="widgetSmallUpdateBlogTitle"> Latest News </h1>
                        <p className="widgetSmallUpdateBlogText"> 
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Nam eget dui....
                        </p>
                    </div>

                </div>
        </div>
    );
}
