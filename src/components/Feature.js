import React, { Fragment } from 'react';

// Don't touch this import
import { fetchQueryResultsFromTermAndValue } from '../api';



/**
 * We need a new component called Searchable which:
 * 
 * Has a template like this:
 * 
 * <span className="content">
 *  <a href="#" onClick={async (event) => {}}>SOME SEARCH TERM</a>
 * </span>
 *
 * You'll need to read searchTerm, searchValue, setIsLoading, and setSearchResults off of the props.
 * 
 * When someone clicks the anchor tag, you should:
 * 
 * - preventDefault on the event
 * - call setIsLoading, set it to true
 * 
 * Then start a try/catch/finally block:
 * 
 * try:
 *  - await the result of fetchQueryResultsFromTermAndValue, passing in searchTerm and searchValue
 *  - send the result to setSearchResults (which will update the Preview component)
 * catch: 
 *  - console.error the error
 * finally:
 *  - call setIsLoading, set it to false
 */
const Searchable = (props) => {
    const {
        searchTerm, 
        searchValue,
        setIsLoading,
        setSearchResults, 
        } = props;

  <span className="content">
    <a href="#" onClick={async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const result = fetchQueryResultsFromTermAndValue({searchTerm, searchValue})
            setSearchResults(result)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }}>{searchTerm}</a>
  </span>
}

/**
 * We need a new component called Feature which looks like this when no featuredResult is passed in as a prop:
 * 
 * <main id="feature"></main>
 * 
 * And like this when one is:
 * 
 * <main id="feature">
 *   <div className="object-feature">
 *     <header>
 *       <h3>OBJECT TITLE</h3>
 *       <h4>WHEN IT IS DATED</h4>
 *     </header>
 *     <section className="facts">
 * <
 *       <span className="title">FACT NAME</span>
 *       <span className="content">FACT VALUE</span>
 * />
 * <React.Fragment **write key here** **only using, if mapping**>
 *       <span className="title">Person</span>
 *       <Searchable />
 * </React.Fragment>
 * 
 *     </section>
 *     <section className="photos">
 *         ***mapping for image here***
 *       <img **key here** src=IMAGE_URL alt=SOMETHING_WORTHWHILE />
 *     </section>
 *   </div>
 * </main>
 * 
 * The different facts look like this: title, dated, images, primaryimageurl, description, culture, style, 
 * technique, medium, dimensions, people, department, division, contact, creditline
 * 
 * The <Searchable /> ones are: culture, technique, medium (first toLowerCase it), and person.displayname (one for each PEOPLE)
 * 
 * NOTE: people and images are likely to be arrays, and will need to be mapped over if they exist
 * 
 * This component should be exported as default.
 */
const Feature = (props) => {

    const {featuredResult, setIsLoading, setSearchResults} = props
    const { 
    images,
    title,
    primaryimageurl,
    dated,
    description,
    culture,
    style,
    technique,
    medium,
    dimensions,
    people,
    department,
    division,
    contact,
    creditline 
    } = featuredResult || {};

return ( 
    <main id="feature">
    <div className="object-feature">
      <header>
        <h3>{title}</h3>
        <h4>{dated}</h4>
      </header>
      <section className="facts">

    <React.Fragment>
      <span className="title">Culture</span>
      <a href="#">
      <span className="content">{culture}</span>
      </a>
    </React.Fragment>
    
     <React.Fragment>
      <span className="title">Technique</span>
      <a href="#">
      <span className="content">{technique}</span>
      </a>
    </React.Fragment>
    
      <span className="title">Medium</span>
      <a href="#">
      <span className="content">{medium}</span>
      </a>
    <React.Fragment>
      <span className="title">Dimensions</span>
      <span className="content">{dimensions}</span>
    </React.Fragment>

    <React.Fragment>
      {/* map over person */}
    </React.Fragment>

    <React.Fragment>
      <span className="title">Department</span>
      <span className="content">{department}</span>
    </React.Fragment>

    <React.Fragment>
      <span className="title">Division</span>
      <span className="content">{division}</span>
    </React.Fragment>
      <span className="title">Contact</span>
      <span className="content">{contact}</span>
    <React.Fragment>
      <span className="title">Credit</span>
      <span className="content">{creditline}</span>
    </React.Fragment>
      </section>

      <section className="photos">
    {
    images.map(image => (
    <div key = {image.id}></div>
    ))    
    }
    <img key={image.id} src={image.primaryimageurl } alt={ image.description }></img>
    </section>
    </div>
    </main>
)
 

   

}

 export default Feature;

//  <img **key here** src=IMAGE_URL alt=SOMETHING_WORTHWHILE />