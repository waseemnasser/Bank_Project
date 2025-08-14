import "./FeaturesFilter.css"
function FeaturesFilter({setGroup}) {
  return (
    <div className="aa-features-filter">
      <div className="aa-filter LexendRegular">

        <button className="aa-filter-button" onClick={()=>setGroup(0)}>Online Banking</button>
        <button className="aa-filter-button" onClick={()=>setGroup(1)}>Financial Tools</button>

        <button className="aa-filter-button aa-third-button" onClick={()=>setGroup(2)}>Customer Support</button>
      </div>

    </div>
  )
}
export default FeaturesFilter