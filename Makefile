.PHONY: deploy

deploy:
	./deploy.sh $(filter-out $@, $(MAKECMDGOALS))
