function Suggestion() {
    return (
        <>
            <div style={{ height: "50px", width: "300px", border:"0px" , padding:"0px", marginLeft:"50px"}}>
                <img
                    src="assets/group.jpeg"
                    alt="image"
                    height="50px" 
                    width="50px"
                    style={{ float: "left", border:"0px", borderRadius:"16px"}}
                />

                {/* <div> */}
                    <p style={{fontSize:"20px",paddingTop:"9px",fontWeight:"normal",paddingRight:"50px"}}>
                        Fashion Designer
                    </p>
                {/* </div> */}
            </div>
        </>
    );
}
export default Suggestion;