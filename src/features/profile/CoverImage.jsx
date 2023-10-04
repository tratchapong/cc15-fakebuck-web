import defaultImage from '../../assets/cover.jpeg';

export default function CoverImage({ src }) {
  return <img src={src || defaultImage} alt="cover" />;
}
