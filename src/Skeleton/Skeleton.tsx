import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={209}
    height={321}
    viewBox="0 0 209 321"
    backgroundColor="#f7f3f3"
    foregroundColor="#c2c2c2"
  >
    <rect x="87" y="-54" rx="0" ry="0" width="166" height="231" />
  </ContentLoader>
)

export default Skeleton

