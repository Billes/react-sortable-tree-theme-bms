import React, { Component } from 'react'
import SortableTree, { toggleExpandedForAll } from 'react-sortable-tree'
import FileExplorerTheme from '../index'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [
        {
          title: 'Incoming Files'
        },
        {
          title: 'Encyclopedia',
          children: [
            {title:'Culture', children: [{title:'Art'},{title:'Craft'}]},
            {title:'Science'},
          ]
        },
        {
          title: 'Retail',
          children: [
            { title: 'Node 01' },
            { title: 'Node 02' },
            { title: 'Node 03', children: [{title:'Subnode 01'}] },
            { title: 'Node 04' },
            { title: 'Node 05' },
          ],
        }
      ],
    }

    this.updateTreeData = this.updateTreeData.bind(this)
    this.expandAll = this.expandAll.bind(this)
    this.collapseAll = this.collapseAll.bind(this)
  }

  updateTreeData(treeData) {
    this.setState({ treeData })
  }

  expand(expanded) {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: this.state.treeData,
        expanded,
      }),
    })
  }

  expandAll() {
    this.expand(true)
  }

  collapseAll() {
    this.expand(false)
  }

  render() {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount,
    } = this.state

    const alertNodeInfo = ({ node, path, treeIndex }) => {
      const objectString = Object.keys(node)
        .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
        .join(',\n   ')

      global.alert(
        'Info passed to the icon and button generators:\n\n' +
          `node: {\n   ${objectString}\n},\n` +
          `path: [${path.join(', ')}],\n` +
          `treeIndex: ${treeIndex}`
      )
    }

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
            : searchFoundCount - 1,
      })

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFocusIndex + 1) % searchFoundCount
            : 0,
      })

    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <div style={{ flex: '0 0 auto', padding: '0 15px' }}>
          <h3>BMS Theme</h3>
          <button onClick={this.expandAll}>Expand All</button>
          <button onClick={this.collapseAll}>Collapse All</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <form
            style={{ display: 'inline-block' }}
            onSubmit={event => {
              event.preventDefault()
            }}
          >
            <label htmlFor="find-box">
              Search:&nbsp;
              <input
                id="find-box"
                type="text"
                value={searchString}
                onChange={event =>
                  this.setState({ searchString: event.target.value })
                }
              />
            </label>

            <button
              type="button"
              disabled={!searchFoundCount}
              onClick={selectPrevMatch}
            >
              &lt;
            </button>

            <button
              type="submit"
              disabled={!searchFoundCount}
              onClick={selectNextMatch}
            >
              &gt;
            </button>

            <span>
              &nbsp;
              {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
              &nbsp;/&nbsp;
              {searchFoundCount || 0}
            </span>
          </form>
        </div>

        <div style={{ flex: '1 0 50%', padding: '0 0 0 15px' }}>
          <SortableTree
            theme={FileExplorerTheme}
            treeData={treeData}
            onChange={this.updateTreeData}
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            searchFinishCallback={matches =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0,
              })
            }
            canDrag={({ node }) => !node.dragDisabled}
            canDrop={({ nextParent }) => !nextParent || nextParent.isDirectory}
            generateNodeProps={rowInfo => ({
              buttons: [
                <button
                  style={{
                    padding: 0,
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    color: 'white',
                    width: 16,
                    height: 16,
                    border: 0,
                    fontWeight: 100,
                  }}
                  onClick={() => alertNodeInfo(rowInfo)}
                >
                  i
                </button>,
              ],
            })}
          />
        </div>
      </div>
    )
  }
}

export default App
