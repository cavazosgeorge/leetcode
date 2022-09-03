/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    let output = [];
    if (!root) return output;
    if (!root.left && !root.right) {
        output.push([root.val]);
        return output;
    }
    
    const dfs = (node, level) => {
        if (!node) return 0;
        if (!output[level]) output.push([]);
        output[level].push(node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    
    dfs(root, 0);
    return output;
}