# Kubernetes Verification Commands

## Apply All Kubernetes Files

```bash
kubectl apply -f kubernetes/
```

## Check Namespace

```bash
kubectl get ns
```

## Check Pods

```bash
kubectl get pods -n chai-kafe
```

## Check Services

```bash
kubectl get svc -n chai-kafe
```

## Check Deployments

```bash
kubectl get deployments -n chai-kafe
```

## Describe Pod

```bash
kubectl describe pod <pod-name> -n chai-kafe
```

## View Logs

```bash
kubectl logs <pod-name> -n chai-kafe
```

## Execute Inside Pod

```bash
kubectl exec -it <pod-name> -n chai-kafe -- sh
```

## Restart Deployment

```bash
kubectl rollout restart deployment backend -n chai-kafe
```

## Check Rollout Status

```bash
kubectl rollout status deployment/backend -n chai-kafe
```

## Delete Resources

```bash
kubectl delete -f kubernetes/
```
