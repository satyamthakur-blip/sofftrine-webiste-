import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'organization', data = {} }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Softtrine',
          description: 'Enterprise-grade IT solutions including software development, AI/ML implementation, cloud infrastructure, and cybersecurity services.',
          url: 'https://softtrine.com',
          logo: 'https://softtrine.com/logo.png',
          sameAs: [
            'https://www.linkedin.com/company/softtrine',
            'https://twitter.com/softtrine',
            'https://github.com/softtrine',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-XXX-XXX-XXXX',
            contactType: 'customer service',
            email: 'contact@softtrine.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Tech Street',
            addressLocality: 'San Francisco',
            addressRegion: 'CA',
            postalCode: '94105',
            addressCountry: 'US',
          },
          ...data,
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data.serviceType || 'IT Services',
          provider: {
            '@type': 'Organization',
            name: 'Softtrine',
          },
          name: data.name,
          description: data.description,
          areaServed: 'Worldwide',
          ...data,
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items?.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline,
          description: data.description,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Organization',
            name: 'Softtrine',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Softtrine',
            logo: {
              '@type': 'ImageObject',
              url: 'https://softtrine.com/logo.png',
            },
          },
          ...data,
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions?.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Softtrine',
          url: 'https://softtrine.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://softtrine.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
          ...data,
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default StructuredData;
