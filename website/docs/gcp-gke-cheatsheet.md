---
title: GKE Cheatsheet
---

Published on December 24, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/gcp/kubernetes-engine/)_

In this section, you will find my notes on using Kubernetes on Google Cloud Platform's [Kubernetes Engine](https://cloud.google.com/kubernetes-engine) (GKE). It covers a typical workflow for starting a Kubernetes cluster and deploying an application on it.

## Clusters

### Creating a cluster

**Typical command:**

```bash
gcloud container clusters create $C_NAME --zone $ZONE --num-nodes $NUM
```

**Shorter command:**

```bash
gcloud container clusters create $C_NAME
```

**With auto-scaling**

```bash
gcloud container clusters create $C_NAME --enable-autoscaling --min-nodes $MIN --max-nodes $MAX
```

:::note

The default value for `--num-nodes` is **3**

:::

:::tip

You can set the default zone for Kubernetes Engine using the following:

- For zonal clusters: `gcloud config set compute/zone $ZONE`
- For regional clusters: `gcloud config set compute/region $REGION`

:::

### Deleting a cluster

**Typical command**

```bash
gcloud container clusters delete $C_NAME
```

### Getting cluster info

**Get all pods running in the cluster**

```
kubectl get pods
```

**Get all services running in the cluster**

```
kubectl get services
```

**Get credentials for cluster**

```
gcloud container clusters get-credentials $C_NAME
```

:::note Cite

This command enables switching to a specific cluster, when working with multiple clusters. It can also be used to access a previously created cluster from a new workstation.

:::

## Deployments

### Creating a deployment

To create a deployment, you need to have your Docker image prepared beforehand. This image must be built and uploaded to the [Container Registry](https://cloud.google.com/container-registry) before you can deploy it on your GKE cluster.

:::tip

Before you proceed, you need to configure Docker to authenticate to the Container Registry: `gcloud auth configure-docker`

:::

1. Build your image:  
   `docker build -t gcr.io/$PROJECT_ID/$NAME:$VER .`
2. Verify it was built:  
   `docker images`
3. Upload your image to the registry:  
   `docker push gcr.io/$PROJECT_ID/$NAME:$VER`
4. Verify it was uploaded:  
   `docker run --rm -p $CONT_PORT:$HOST_PORT gcr.io/$PROJECT_ID/$NAME:$VER`
5. Create your deployment:  
   `kubectl create deployment $D_NAME --image=gcr.io/$PROJECT_ID/$NAME:$VER`
6. Verify it was deployed:  
   `kubectl get pods`
7. Expose the deployment to the Internet via a Service resource:  
   `kubectl expose deployment $D_NAME --type=LoadBalancer --port $EXPOSED_PORT --target-port $HOST_PORT`
8. Verify the service is running:  
   `kubectl get service`

### Deleting a deployment

1. Delete the Service resource:  
   `kubectl delete service $D_NAME`
2. Delete the cluster:  
   `gcloud container clusters delete $C_NAME`

### Updating your deployment

To update your deployment with a new Docker image, you have to upload it to the Cloud Registry. Next, you can apply a rolling update of your deployment's Docker image.

1. Build your new image (remember to update `$VER`):  
   `docker build -t gcr.io/$PROJECT_ID/$I_NAME:$VER .`
2. Verify it was built:  
   `docker images`
3. Upload your image to the registry:  
   `docker push gcr.io/$PROJECT_ID/$I_NAME:$VER`
4. Verify it was uploaded:  
   `docker run --rm -p $CONT_PORT:$HOST_PORT gcr.io/$PROJECT_ID/$I_NAME:$VER`
5. Apply a rolling image update:  
   `kubectl set image deployment/$D_NAME $I_NAME=gcr.io/$PROJECT_ID/$I_NAME:$VER`

### Scaling a deployment

**Typical example**

```bash
kubectl scale deployment $D_NAME --replicas $NUM
```

**With auto-scaling**

```bash
kubectl autoscale deployment $D_NAME --max $MAX --min $MIN --cpu-percent $PERCENT
```

### Getting deployment info

**Typical example**

```bash
kubectl get deployment $D_NAME
```

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/gcp/kubernetes-engine/)
- [Kubectl Reference Docs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [Documentation on 'gcloud container clusters create'](https://cloud.google.com/sdk/gcloud/reference/container/clusters/create)
- [Documentation on 'gcloud container clusters delete'](https://cloud.google.com/kubernetes-engine/docs/how-to/deleting-a-cluster)
- [Documentation on 'gcloud container clusters get-credentials'](https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials)
- [Tutorial on deploying a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)
- [Documentation on 'kubectl autoscale'](https://cloud.google.com/kubernetes-engine/docs/how-to/scaling-apps#autoscaling-deployments)
