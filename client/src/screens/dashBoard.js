import React from 'react'





const dashBoard = () => {
    return (
        
        <div className="col-xl-12 col-lg-12">
            <div className='mx-5 px-5'><h1>Dashboard</h1></div>
            <div className='content-board'>
            <div className="card mb-4 shadow-sm d-flex">
                <article className="card-body" >
                    <h5 className="card-title">Sales statistics</h5>
                   
                        <iframe
                            style={{
                                background: "#FFFFFF",
                                border: "none",
                                borderRadius: "2px",
                                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
                                width: "100%",
                                height: "350px",
                            }}
                            src="https://charts.mongodb.com/charts-project-0-mawyk/embed/charts?id=628f8f1f-b3f9-445f-8b4e-6191e5a74475&maxDataAge=3600&theme=light&autoRefresh=true"
                            title="Product staticstics"
                        ></iframe>
                   
                </article>
            </div>
            <div className="card mb-4 shadow-sm">
                <article className="card-body" >
                    <h5 className="card-title">Product statistics</h5>
                   
                        <iframe
                            style={{
                                background: "#FFFFFF",
                                border: "none",
                                borderRadius: "2px",
                                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
                                width: "100%",
                                height: "350px",
                            }}
                            src="https://charts.mongodb.com/charts-project-0-mawyk/embed/charts?id=628f903c-11d8-4904-8db6-987ab64eb158&maxDataAge=3600&theme=light&autoRefresh=true"
                            title="Product staticstics"
                        ></iframe>
                   
                </article>
            </div>
            </div>
           
        </div>
    );
};

export default dashBoard;