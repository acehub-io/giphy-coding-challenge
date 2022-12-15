import { Link } from 'react-router-dom';
import SearchButton from '../SearchButton/SearchButton';

export default function SearchLink(props) {
  return (
    <Link to={props.to}>
      <SearchButton variant={props.variant} text={props.text} url='/' />
    </Link>
  );
}
