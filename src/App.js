import React from 'react';
import Header from './component/Header';
import Figure from './component/Figure';
import ArticleSection from './component/ArticleSection';
import ProductSection from './component/ProductSection';
import Footer from './component/Footer';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <div className="all-wrap">
      <GlobalStyle />
      <Header />
      <main id="main">
        <div className="main-inner">
          <Figure />
          <ArticleSection type="brand" />
          <ArticleSection type="cross" />
          <ProductSection type="best" title="Best" />
          <ProductSection type="new" title="New" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;