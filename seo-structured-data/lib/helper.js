'use strict';
module.exports = getStructuredData;

var fs = require('fs'),
  ejs = require('ejs'),
  path = require('path'),
  viewPath = path.join(__dirname, '..', 'views');

function getStructuredData (config, page) {
  const additions = [];
  additions.push(getWebsiteStructuredData(config));
  additions.push(getOrganizationStructuredData(config));
  additions.push(getArticleStructuredData(config, page));
  return additions.join('\n');
}

function getArticleStructuredData (config, page) {
  if (!page) {
    return '';
  }
  const tags = [];
  const aliases = [];
  if(page.tags){
    page.tags.forEach(tag => {
      tags.push(tag.name);
    });
  }
  if(page.alias){
    page.alias.forEach(alias => {
      aliases.push(alias); // todo remove dev item
    });
  }


  var templateFilePath = path.join(viewPath, 'article.ejs');
  var data = {
    'headline': page.title,
    'url': config.url,
    articleUrl: `${config.url}/${page.slug}`,
    'author': page.author || 'MyEtherWallet',
    'dateModified': page.updated.format(),
    'datePublished': page.date.format(),
    articlePath: page.path.slice(2),
    languages: config.i18n.languages,
    tags: tags,
    aliases: aliases
  };
  var templateContent = getTemplateContent(templateFilePath);
  return getCompiledContent(templateFilePath, templateContent, data);
}



function getWebsiteStructuredData (config) {
  var templateFilePath = path.join(viewPath, 'website.ejs');
  var data = {
    'name': config.title,
    'url': config.url
  };

  var templateContent = getTemplateContent(templateFilePath);
  return getCompiledContent(templateFilePath, templateContent, data);
}

function getOrganizationStructuredData (config) {
  var templateFilePath = path.join(viewPath, 'organization.ejs');
  var data = {
    'name': config.seo_structured_data.organization.name,
    'url': config.seo_structured_data.organization.url,
    'logoUrl': config.seo_structured_data.organization.logoUrl
  };
  var templateContent = getTemplateContent(templateFilePath);
  return getCompiledContent(templateFilePath, templateContent, data);
}

function getTemplateContent (filePath) {
  return fs.readFileSync(filePath, {encoding: 'utf8'});
}

function getCompiledContent (templateFilePath, templateContent, data) {
  var compiledTemplate = ejs.compile(templateContent, {
    filename: templateFilePath
  });
  return compiledTemplate(data);
}

function concatenateContent (website, organization) {
  return website + '\n' + organization;
}
