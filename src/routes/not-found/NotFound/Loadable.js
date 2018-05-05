import Loadable from 'react-loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'not-found' */ './index'),
  loading: LoadingIndicator,
});