import { useState, useEffect } from "react"
import client from "../Client"
import { Link, useParams } from "react-router-dom"
import BlockContent from "@sanity/block-content-to-react"
import { BeatLoader } from "react-spinners"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        "authorName": author -> name,
      }`
    ).then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ?
        <BeatLoader 
          color='#a6a6a6' 
          size='50' 
          cssOverride={{
            display: "flex", 
            justifyContent: "center", 
            marginTop: "45dvh"
          }}
        />
        :
        <section className='px-5 xl:max-w-6xl xl:mx-auto pb-20'>
          <h1 className='uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl text-center mt-5 mb-10'>{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title} title={singlePost.title}
              className='blog__image rounded-t'
            />
          )}
          <p>By INSERT AUTHOR</p>
          <div className='block__content'>
            <BlockContent
              blocks={singlePost.body}
              projectId='t69jowl7'
              dataset='production'
            />
          </div>
          <button>
            <Link to='/blog' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration 500 hover:text-black font-bold'>Read more articles</Link>
          </button>
        </section>
      }
    </>
  )
}
