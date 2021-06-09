import { useStaticQuery, graphql } from "gatsby"

const useImagesHook = () => {

  /**
   * Logo Cognitive
   */  
  const { logo } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "cognityve-logo-02.png" }) {
        publicURL
      }
    }
  `);

  return logo;

}

export default useImagesHook
