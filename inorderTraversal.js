var inorderTraversal = function (root, visited = []) {
  if (!root) return visited;
  inorderTraversal(root.left, visited);
  visited.push(root.val);
  inorderTraversal(root.right, visited);
  return visited;
};
