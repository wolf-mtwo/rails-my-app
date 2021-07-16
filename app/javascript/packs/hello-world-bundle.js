import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Footer from '../bundles/HelloWorld/components/Footer';
import PostList from '../bundles/HelloWorld/components/PostList';
import PostItem from '../bundles/HelloWorld/components/PostItem';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Footer,
  PostList,
  PostItem,
});
