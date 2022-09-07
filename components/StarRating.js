import Ratings from 'react-ratings-declarative';


const StarRating = ({rating, size, spacing}) => {
  return (
    <Ratings
      rating={rating}
      typeOfWidget='star'
      widgetRatedColors='rgb(255,165,0)'
      widgetEmptyColors='#cccccc'
      widgetDimensions={size}
      widgetSpacings={spacing}
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      </Ratings>
  )
}
StarRating.defaultProps = {
    rating:0,
    size:'1.2rem',
    spacing:'.2rem',
}
export default StarRating