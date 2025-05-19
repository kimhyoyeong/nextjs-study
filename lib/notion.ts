import { Client } from '@notionhq/client';
import type { Post } from '@/types/blog';
import type {
  PageObjectResponse,
  PersonUserObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPublishedPosts = async (): Promise<Post[]> => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: { property: 'Status', select: { equals: 'Published' } },
      sorts: [{ property: 'Date', direction: 'descending' }],
    });

    // 데이터 확인을 위한 로깅
    console.log('Notion API Response:', {
      totalResults: response.results.length,
      firstPost: response.results[0],
      properties: response.results[0]?.properties,
    });

    return response.results
      .filter((page): page is PageObjectResponse => 'properties' in page)
      .map((page) => {
        const { properties } = page;
        return {
          id: page.id,
          title:
            properties.Title.type === 'title' ? (properties.Title.title[0]?.plain_text ?? '') : '',
          description:
            properties.Description.type === 'rich_text'
              ? (properties.Description.rich_text[0]?.plain_text ?? '')
              : '',
          author:
            properties.Author.type === 'people'
              ? ((properties.Author.people[0] as PersonUserObjectResponse)?.name ?? '')
              : '',
          date: properties.Date.type === 'date' ? (properties.Date.date?.start ?? '') : '',
          tags:
            properties.Tags?.type === 'multi_select'
              ? properties.Tags.multi_select.map((tag) => tag.name)
              : [],
        };
      });
  } catch (error) {
    console.error('Error fetching Notion posts:', error);
    return [];
  }
};
