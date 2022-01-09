module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'animation',
    'architecture',
    'bug',
    'ci',
    'config',
    'delete',
    'deploy',
    'docs',
    'feat',
    'format',
    'hack',
    'hotfix',
    'localization',
    'merge',
    'mock',
    'move',
    'perf',
    'refactor',
    'research',
    'scaffold',
    'style',
    'test',
    'typos',
    'versioning',
    'wip'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: ['cl-config', 'core', 'fastlane', 'husky', 'mobile', 'README', 'root'],
  types: {
    format: {
      emoji: '🎨',
      description: 'Improve structure/format of the code',
      value: 'format'
    },
    perf: {
      emoji: '⚡️',
      description: 'Improve performance',
      value: 'perf'
    },
    delete: {
      emoji: '🔥',
      description: 'Remove code or files',
      value: 'delete'
    },
    bug: {
      emoji: '🐛',
      value: 'bug',
      description: 'Fix a bug'
    },
    hotfix: {
      emoji: '🚑',
      value: 'hotfix',
      description: 'Critical hotfix'
    },
    feat: {
      emoji: '✨',
      value: 'feat',
      description: 'Introduce new features'
    },
    docs: {
      emoji: '📝',
      value: 'docs',
      description: 'Add or update documentation'
    },
    deploy: {
      emoji: '🚀',
      value: 'deploy',
      description: 'Deploy stuff'
    },
    style: {
      emoji: '💄',
      value: 'style',
      description: 'Add or update the UI and style files'
    },
    scaffold: {
      emoji: '🎉',
      value: 'scaffold',
      description: 'Begin a project'
    },
    test: {
      emoji: '✅',
      value: 'test',
      description: 'Add, update, or pass tests'
    },
    versioning: {
      emoji: '🔖',
      value: 'versioning',
      description: 'Release/Version tags'
    },
    wip: {
      emoji: '🚧',
      value: 'wip',
      description: 'Work in progress'
    },
    ci: {
      emoji: '🎡',
      value: 'ci',
      description: 'CI/CD related changes'
    },
    refactor: {
      emoji: '💡',
      value: 'refactor',
      description: 'Refactor code'
    },
    config: {
      emoji: '🔧',
      value: 'config',
      description: 'Add or update configuration files or scripts'
    },
    localization: {
      emoji: '🌐',
      value: 'localization',
      description: 'Internationalization and localization'
    },
    typos: {
      emoji: '✏️',
      value: 'typos',
      description: 'Fix typos'
    },
    move: {
      emoji: '🚚',
      value: 'move',
      description: 'Move or rename resources (e.g.: files, paths, routes)'
    },
    architecture: {
      emoji: '🏗️',
      value: 'architecture',
      description: 'Make architectural changes'
    },
    mock: {
      emoji: '🤡',
      value: 'mock',
      description: 'Create mocks'
    },
    research: {
      emoji: '🤓',
      value: 'research',
      description: 'Research for a feature'
    },
    animation: {
      emoji: '💫',
      value: 'animation',
      description: 'Add or update animations and transitions'
    },
    merge: {
      emoji: '🔀',
      value: 'merge',
      description: 'Merge branches'
    },
    hack: {
      emoji: '💩',
      value: 'hack',
      description: 'Add a hacky fix'
    }
  }
};
