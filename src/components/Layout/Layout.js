import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <script
      dangerouslySetInnerHTML={{
        __html: `
<!-- Default Statcounter code for Bram Koot personal blog
https://www.bramkoot.nl -->
<script type="text/javascript">
var sc_project=12001995; 
var sc_invisible=1; 
var sc_security="434489f2"; 
var sc_https=1; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js" async></script>
<noscript><div class="statcounter"><a title="Web Analytics"
href="https://statcounter.com/" target="_blank"><img class="statcounter"
src="https://c.statcounter.com/12001995/0/434489f2/1/" alt="Web
Analytics"></a></div></noscript>
<!-- End of Statcounter Code -->
            `,
      }}
    />
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}

    
  </div>
);

export default Layout;
