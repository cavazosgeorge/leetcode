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
 * @return {number[]}
 */
const postorderTraversal = (root) => {
    let output = [];
    const dfs = (node) => {
        if (!node) return 0;
        dfs(node.left);
        dfs(node.right);
        output.push(node.val);
    }
    
    dfs(root);
    return output;
}