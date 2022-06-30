export default function ErrorPage(){
    return (
        <div>
            <h2>Error Page </h2>
        </div>
    )
}

ErrorPage.getLayout = function PageLayout(page){
    return(
        <>
            {page}
        </>
    )
}