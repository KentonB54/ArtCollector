import React, { Fragment } from 'react';


import { fetchQueryResultsFromTermAndValue } from '../api';

const Searchable = (props) => {
    const {
        searchTerm, 
        searchValue,
        setIsLoading,
        setSearchResults, 
        } = props;
return (
  <span className="content">
    <a href="#" onClick={async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const result = await fetchQueryResultsFromTermAndValue(searchTerm, searchValue)
            setSearchResults(result)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }}>{searchTerm}</a>
  </span>
 )
}

const Feature = (props) => {


    const {featuredResult, setIsLoading, setSearchResults} = props;

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
    } = featuredResult;

return ( 
    <main id="feature">
    <div className="object-feature">
    <header>
      <h3>{title}</h3>
      <h4>{dated}</h4>
    </header>
    <section className="facts">

    { department && (
              <>
              <Fragment>
                <span className="title">Department</span>
                <span className="content">{department}</span>
              </Fragment> 
              </>)
            }

    {medium && (
              <>
              <span className="title">Medium</span>
              <Searchable
              searchTerm={medium.toLowerCase()}
              searchValue={medium.toLowerCase()}
              setIsLoading={setIsLoading}
              setSearchResults={setSearchResults}/>
              </>)
            }

    {people && (
            people.map(person => (
            <Fragment key={person.personid}>
            <span className="title">Person</span>
            
            <Searchable 
            searchTerm={person.displayname}
            searchValue={person.displayname}
            setIsLoading={setIsLoading}
            setSearchResults={setSearchResults}/>
            </Fragment>
            ))
          )}

{ technique && (
              <>
              <Fragment>
                <span className="title">Technique</span>
                <Searchable
                searchTerm={technique}
                searchValue={technique}
                setIsLoading={setIsLoading}
                setSearchResults={setSearchResults}/>
              </Fragment> 
              </>)
            }

{ culture && (
              <>
              <Fragment>
                <span className="title">Culture</span>
                <Searchable
                searchTerm={culture}
                searchValue={culture}
                setIsLoading={setIsLoading}
                setSearchResults={setSearchResults}/>
              </Fragment> 
              </>)
            }

{ dimensions && (
              <>
              <Fragment>
                <span className="title">Dimensions</span>
                <span className="content">{dimensions}</span>
              </Fragment> 
              </>)
            }

{ division && (
              <>
              <Fragment>
                <span className="title">Division</span>
                <span className="content">{division}</span>
              </Fragment> 
              </>)
            }

{ contact && (
              <>
              <Fragment>
                <span className="title">Contact</span>
                <span className="content">{contact}</span>
              </Fragment> 
              </>)
            }

{ creditline && (
              <>
              <Fragment>
                <span className="title">Credit</span>
                <span className="content">{creditline}</span>
              </Fragment> 
              </>)
            }  

{ description && (
              <>
              <Fragment>
                <span className="title">Description</span>
                <span className="content">{description}</span>
              </Fragment> 
              </>)
            }    

{ style && (
              <>
              <Fragment>
                <span className="title">Style</span>
                <span className="content">{style}</span>
              </Fragment> 
              </>)
            }                      
    </section>

    <section className="photos">
    {images ? (
        images.map(image =>
          <img key={image.imageid} src={image.baseimageurl} alt={image.description}/>)
      ) : (
        <img src={primaryimageurl} alt={primaryimageurl}/>
      )}
    </section>
    </div>
    </main>
  )
}

 export default Feature;