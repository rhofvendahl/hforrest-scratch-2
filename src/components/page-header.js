import '../css/page-header.css'

function PageHeader(props) {
  // separate component for rendering the header of specific pages
  const title = props.title;
  return (
    <div className="page-header">
      <p className="title">{title}</p>
      <div className="line"/>
    </div>
  )
}

export default PageHeader;
