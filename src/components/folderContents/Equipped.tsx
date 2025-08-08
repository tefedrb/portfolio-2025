import equipmentImg from '../../assets/Equipped_Equipment.png';
import './folderContents.css';

const Equipped = () => {
  return (
    <>
      <div className="proj-link-wrap">
        <a className="proj-link" href="https://github.com/tefedrb/equipped" target="_blank">[ GitHub ]</a>
        <a className="proj-link">[ Demo ]</a>
      </div>
      <h1 style={{marginTop: "0"}}>Equipped</h1>
      <img className="app-ui" src={equipmentImg} />
      <div className="text-wrap">
        <p className="text">
          Equipped is a video & photography equipment management application, 
          meant to help film collectives, media companies, or rental houses 
          keep track of all their equipment. A user can browse a catalog of items 
          and stash the ones they own into their company inventory. There is a feature 
          that allows you to see who has what piece of equipment checked out, along with 
          a history of the usage. There is also a message board that can utilized.
        </p>
        <p className="text">
          I made this app after thinking about my time working for a small media company that
          could have used an equipment manager. This application would have been a good aid for keeping track 
          of who was using what and when.
        </p>
      </div>
    </>
  )
}

export default Equipped;