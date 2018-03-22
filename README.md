# React Sortable Tree BMS Theme

[![github: last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/Billes/react-sortable-tree-theme-bms) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) 


![Preview of theme](demo/screenshot.png)

## Features
* You can click anywhere on a node to drag it.
* More compact design, with indentation alone used to represent tree depth.

## Usage

```sh
npm install --save react-sortable-tree-theme-bms
```

```jsx
import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import BMSTheme from 'react-sortable-tree-theme-bms';

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [{ title: 'src/', children: [ { title: 'index.js' } ] }],
    };
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={BMSTheme}
          scaffoldBlockPxWidth={17}
        />
      </div>
    );
  }
}
```
