import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from "../components/Content";
import requests from "../utils/requests"



export default function Home(props) {

  
  
  return (
    <>
    <Content data={props.data} />
    </>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`)
  
  const response = await request.json()


  return {
      props: {
        data: response.results
      }
  }
}