export const commonFields = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    type: "datetime",
    name: "dateCreated",
    label: "Created Date",
    required: true,
  },
  {
    type: "datetime",
    name: "dateModified",
    label: "Modified Date",
    required: true,
  },
  {
    type: "datetime",
    name: "datePublished",
    label: "Published Date",
  },
  {
    type: "string",
    name: "tags",
    label: "Tags",
    list: true,
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
  },
  {
    type: "boolean",
    name: "draft",
    label: "Published",
  },
];
